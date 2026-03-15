import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 24) {
            Text("Title")
                .font(.title)
                .bold()
            Text("Subtitle")
                .font(.system(size: 18))
                .foregroundColor(.gray)
            Text("Box")
                .frame(width: 200, height: 80)
                .background(Color.orange.opacity(0.3))
                .cornerRadius(8)
        }
        .padding()
    }
}
