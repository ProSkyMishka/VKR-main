import SwiftUI
struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                Text("Stack root")
            }
            .navigationTitle("Stack")
        }
    }
}
