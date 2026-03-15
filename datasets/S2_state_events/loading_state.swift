import SwiftUI
struct ContentView: View {
    @State private var loading = true
    var body: some View {
        Text(loading ? "Loading..." : "Ready")
            .onAppear { loading = false }
    }
}
