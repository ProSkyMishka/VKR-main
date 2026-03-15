import SwiftUI
struct ContentView: View {
    @State private var value = 0
    var body: some View {
        Text("\(value)")
            .onAppear { value = 42 }
    }
}
