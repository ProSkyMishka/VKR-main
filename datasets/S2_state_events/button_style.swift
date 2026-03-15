import SwiftUI
struct ContentView: View {
    @State private var tapped = false
    var body: some View {
        Button(tapped ? "Done" : "Tap") {
            tapped = true
        }.padding()
    }
}
