import SwiftUI

struct Dnld012: View {
    let title: String
    var body: some View {
        VStack {
            Text("nld012-detail: " + title).font(.title2)
            Text("nld012-extra")
        }
    }
}

struct ContentView: View {
    let items = ["nld012-one", "nld012-two", "nld012-three"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Dnld012(title: it) }
            }
            .navigationTitle("nld012-rows")
        }
    }
}
