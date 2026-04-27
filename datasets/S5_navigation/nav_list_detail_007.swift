import SwiftUI

struct Dnld007: View {
    let title: String
    var body: some View {
        VStack {
            Text("nld007-detail: " + title).font(.title2)
            Text("nld007-extra")
        }
    }
}

struct ContentView: View {
    let items = ["nld007-one", "nld007-two", "nld007-three"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Dnld007(title: it) }
            }
            .navigationTitle("nld007-rows")
        }
    }
}
