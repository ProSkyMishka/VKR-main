import SwiftUI

struct Dnld011: View {
    let title: String
    var body: some View {
        VStack {
            Text("nld011-detail: " + title).font(.title2)
            Text("nld011-extra")
        }
    }
}

struct ContentView: View {
    let items = ["nld011-one", "nld011-two", "nld011-three"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Dnld011(title: it) }
            }
            .navigationTitle("nld011-rows")
        }
    }
}
