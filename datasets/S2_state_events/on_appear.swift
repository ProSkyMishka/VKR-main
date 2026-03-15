import SwiftUI

struct ContentView: View {
    @State private var loaded = false

    var body: some View {
        Text(loaded ? "Loaded" : "Loading...")
            .onAppear {
                loaded = true
            }
    }
}
