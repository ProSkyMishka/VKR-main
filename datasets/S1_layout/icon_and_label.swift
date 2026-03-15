import SwiftUI
struct ContentView: View {
    var body: some View {
        HStack(spacing: 12) {
            Image(systemName: "star.fill").foregroundColor(.yellow)
            Text("Favorite")
        }.padding()
    }
}
