import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("chip004-label")
                .font(.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 14)
                .padding(.vertical, 10)
                .frame(width: 84, height: 34)
                .background(Color.purple)
                .cornerRadius(17)
                .shadow(radius: 2)
        }
        .padding()
    }
}
