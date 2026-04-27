import SwiftUI

struct Dnld009: View {
    let title: String
    var body: some View {
        VStack {
            Text("nld009-detail: " + title).font(.title2)
            Text("nld009-extra")
        }
    }
}

struct ContentView: View {
    let items = ["nld009-one", "nld009-two", "nld009-three"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Dnld009(title: it) }
            }
            .navigationTitle("nld009-rows")
        }
    }
}
