import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                Text("nst007-home")
                NavigationLink("nst007-go") { Text("nst007-next") }
            }
            .navigationTitle("nst007-stackTitle")
        }
    }
}
